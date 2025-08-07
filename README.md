# Interactive Chart Dashboard

A React-based dashboard application that displays three interactive charts from PowerPoint presentation data. Users can view thumbnail versions of all charts on a single page and click buttons to view full-size versions in modal overlays.

## Features

- **Three Chart Types:**

  - Words to Review Count By Monthly
  - Misspellings Count By Monthly
  - Total Monthly Counts Across All 5 Websites

- **Interactive Interface:**

  - Thumbnail view of all charts on main dashboard
  - Click buttons to view full-size charts in modal overlays
  - Responsive design for desktop and mobile devices
  - Smooth animations and transitions

- **Built with:**
  - React 18 with TypeScript
  - Chart.js and react-chartjs-2 for data visualization
  - CSS Grid and Flexbox for responsive layouts
  - Modern CSS animations and effects

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download the project
2. Navigate to the project directory:

   ```bash
   cd chart-dashboard
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

1. **Main Dashboard**: View thumbnail versions of all three charts
2. **View Full Chart**: Click the "View Full Chart" button under any thumbnail to see the full-size version
3. **Close Modal**: Click the × button or click outside the modal to return to the dashboard

## Project Structure

```
chart-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx          # Main dashboard component
│   │   ├── Dashboard.css          # Dashboard styles
│   │   ├── ChartThumbnail.tsx     # Thumbnail chart component
│   │   ├── FullChartView.tsx      # Full-size chart modal
│   │   └── FullChartView.css      # Modal styles
│   ├── data/
│   │   └── chartData.ts           # Chart data and configurations
│   ├── App.tsx                    # Main app component
│   ├── App.css                    # Global styles
│   └── index.tsx                  # App entry point
├── package.json
├── tsconfig.json
└── README.md
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Data Source

The chart data is extracted from PowerPoint presentation slides and includes:

- Monthly data for Legal, Legal UK, TR Canada, Tax & Accounting, and Thomson Reuters
- Misspellings count data across different categories
- Total counts aggregated across all 5 websites

## Customization

To modify the charts or add new data:

1. Edit the data in `src/data/chartData.ts`
2. Adjust colors in the `chartColors` object
3. Modify chart configurations in the component files
