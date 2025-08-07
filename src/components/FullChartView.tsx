import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartType } from "../App";
import {
  wordsToReviewData,
  misspellingsData,
  totalCountsData,
  chartColors,
} from "../data/chartData";
import "./FullChartView.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface FullChartViewProps {
  chartType: ChartType;
  onClose: () => void;
}

const FullChartView: React.FC<FullChartViewProps> = ({
  chartType,
  onClose,
}) => {
  const chartRef = useRef<any>(null);
  const [showTable, setShowTable] = React.useState(false);

  const handleDownload = () => {
    const chart = chartRef.current;
    if (chart) {
      // Get the canvas element
      const canvas = chart.canvas;

      // Create a new canvas with white background
      const newCanvas = document.createElement("canvas");
      const newCtx = newCanvas.getContext("2d");

      if (newCtx) {
        // Set the same dimensions
        newCanvas.width = canvas.width;
        newCanvas.height = canvas.height;

        // Fill with white background
        newCtx.fillStyle = "#ffffff";
        newCtx.fillRect(0, 0, newCanvas.width, newCanvas.height);

        // Draw the original chart on top
        newCtx.drawImage(canvas, 0, 0);

        // Create download link
        const url = newCanvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = `${getChartTitle().replace(/\s+/g, "_")}.png`;
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };
  const getChartData = () => {
    switch (chartType) {
      case "wordsToReview":
        return {
          labels: wordsToReviewData.map((item) => item.month),
          datasets: [
            {
              label: "Legal",
              data: wordsToReviewData.map((item) => item.legal),
              backgroundColor: chartColors.legal,
            },
            {
              label: "Legal UK",
              data: wordsToReviewData.map((item) => item.legalUK),
              backgroundColor: chartColors.legalUK,
            },
            {
              label: "TR Canada",
              data: wordsToReviewData.map((item) => item.trCanada),
              backgroundColor: chartColors.trCanada,
            },
            {
              label: "Tax & Accounting",
              data: wordsToReviewData.map((item) => item.taxAccounting),
              backgroundColor: chartColors.taxAccounting,
            },
            {
              label: "Thomson Reuters",
              data: wordsToReviewData.map((item) => item.thomsonReuters),
              backgroundColor: chartColors.thomsonReuters,
            },
          ],
        };
      case "misspellings":
        return {
          labels: misspellingsData.map((item) => item.month),
          datasets: [
            {
              label: "Legal",
              data: misspellingsData.map((item) => item.legal),
              backgroundColor: chartColors.legal,
            },
            {
              label: "Legal UK",
              data: misspellingsData.map((item) => item.legalUK),
              backgroundColor: chartColors.legalUK,
            },
            {
              label: "TR Canada",
              data: misspellingsData.map((item) => item.trCanada),
              backgroundColor: chartColors.trCanada,
            },
            {
              label: "Tax & Accounting",
              data: misspellingsData.map((item) => item.taxAccounting),
              backgroundColor: chartColors.taxAccounting,
            },
            {
              label: "Thomson Reuters",
              data: misspellingsData.map((item) => item.thomsonReuters),
              backgroundColor: chartColors.thomsonReuters,
            },
          ],
        };
      case "totalCounts":
        return {
          labels: totalCountsData.map((item) => item.month),
          datasets: [
            {
              label: "Misspellings",
              data: totalCountsData.map((item) => item.misspellings),
              backgroundColor: chartColors.misspellings,
            },
            {
              label: "Words to Review",
              data: totalCountsData.map((item) => item.wordsToReview),
              backgroundColor: chartColors.wordsToReview,
            },
            {
              label: "Approved Words",
              data: totalCountsData.map((item) => item.approvedWords),
              backgroundColor: chartColors.approvedWords,
            },
          ],
        };
      default:
        return { labels: [], datasets: [] };
    }
  };

  const getTableData = () => {
    switch (chartType) {
      case "wordsToReview":
        return {
          data: wordsToReviewData,
          categories: [
            { key: "legal", label: "Legal", color: chartColors.legal },
            { key: "legalUK", label: "Legal UK", color: chartColors.legalUK },
            {
              key: "trCanada",
              label: "TR Canada",
              color: chartColors.trCanada,
            },
            {
              key: "taxAccounting",
              label: "Tax & Accounting",
              color: chartColors.taxAccounting,
            },
            {
              key: "thomsonReuters",
              label: "Thomson Reuters",
              color: chartColors.thomsonReuters,
            },
          ],
        };
      case "misspellings":
        return {
          data: misspellingsData,
          categories: [
            { key: "legal", label: "Legal", color: chartColors.legal },
            { key: "legalUK", label: "Legal UK", color: chartColors.legalUK },
            {
              key: "trCanada",
              label: "TR Canada",
              color: chartColors.trCanada,
            },
            {
              key: "taxAccounting",
              label: "Tax & Accounting",
              color: chartColors.taxAccounting,
            },
            {
              key: "thomsonReuters",
              label: "Thomson Reuters",
              color: chartColors.thomsonReuters,
            },
          ],
        };
      case "totalCounts":
        return {
          data: totalCountsData,
          categories: [
            {
              key: "misspellings",
              label: "Misspellings",
              color: chartColors.misspellings,
            },
            {
              key: "wordsToReview",
              label: "Words to Review",
              color: chartColors.wordsToReview,
            },
            {
              key: "approvedWords",
              label: "Approved Words",
              color: chartColors.approvedWords,
            },
          ],
        };
      default:
        return { data: [], categories: [] };
    }
  };

  const getChartTitle = () => {
    switch (chartType) {
      case "wordsToReview":
        return "Words to Review Count By Monthly";
      case "misspellings":
        return "Misspellings Count By Monthly";
      case "totalCounts":
        return "Total Monthly Counts Across All 5 Websites";
      default:
        return "";
    }
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    backgroundColor: "#ffffff",
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 20,
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: getChartTitle(),
        font: {
          size: 18,
          weight: "bold" as const,
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Count",
        },
        beginAtZero: true,
      },
    },
  };

  const tableData = getTableData();

  return (
    <div className="full-chart-overlay">
      <div className="full-chart-modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <button className="download-btn" onClick={handleDownload}>
          📥 Download
        </button>
        <button
          className="view-table-btn"
          onClick={() => setShowTable(!showTable)}
        >
          📊 {showTable ? "Hide Table" : "View Table"}
        </button>
        <div className="full-chart-container">
          <div className="chart-section">
            <Bar ref={chartRef} data={getChartData()} options={options} />
          </div>
          {showTable && (
            <div className="table-section">
              <table className="data-table">
                <thead>
                  <tr>
                    <th></th>
                    {tableData.data.map((item: any) => (
                      <th key={item.month}>{item.month}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.categories.map((category: any) => (
                    <tr key={category.key}>
                      <td className="category-label">
                        <div className="category-item">
                          <div
                            className="color-indicator"
                            style={{ backgroundColor: category.color }}
                          ></div>
                          {category.label}
                        </div>
                      </td>
                      {tableData.data.map((item: any) => (
                        <td
                          key={`${category.key}-${item.month}`}
                          className="data-cell"
                        >
                          {item[category.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FullChartView;
