import React from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartThumbnailProps {
  chartType: ChartType;
}

const ChartThumbnail: React.FC<ChartThumbnailProps> = ({ chartType }) => {
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

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend in thumbnail
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false, // Hide x-axis labels in thumbnail
      },
      y: {
        display: false, // Hide y-axis labels in thumbnail
      },
    },
  };

  return (
    <div className="chart-thumbnail">
      <Bar data={getChartData()} options={options} />
    </div>
  );
};

export default ChartThumbnail;
