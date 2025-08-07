import React from "react";
import { ChartType } from "../App";
import ChartThumbnail from "./ChartThumbnail";
import "./Dashboard.css";

interface DashboardProps {
  onChartSelect: (chartType: ChartType) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onChartSelect }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-grid">
        <div className="chart-section">
          <h2>Words to Review Count By Monthly</h2>
          <ChartThumbnail chartType="wordsToReview" />
          <button
            className="view-full-btn"
            onClick={() => onChartSelect("wordsToReview")}
          >
            View Full Chart
          </button>
        </div>

        <div className="chart-section">
          <h2>Misspellings Count By Monthly</h2>
          <ChartThumbnail chartType="misspellings" />
          <button
            className="view-full-btn"
            onClick={() => onChartSelect("misspellings")}
          >
            View Full Chart
          </button>
        </div>

        <div className="chart-section">
          <h2>Total Monthly Counts Across All 5 Websites</h2>
          <ChartThumbnail chartType="totalCounts" />
          <button
            className="view-full-btn"
            onClick={() => onChartSelect("totalCounts")}
          >
            View Full Chart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
