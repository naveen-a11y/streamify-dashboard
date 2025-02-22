import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "./DataVisualization.css";

interface UserGrowthData {
  month: string;
  totalUsers: number;
  activeUsers: number;
}

interface RevenueData {
  name: string;
  value: number;
}

interface SongData {
  name: string;
  streams: number;
}

const userGrowthData: UserGrowthData[] = [
  { month: "Jan", totalUsers: 800000, activeUsers: 600000 },
  { month: "Feb", totalUsers: 900000, activeUsers: 650000 },
  { month: "Mar", totalUsers: 950000, activeUsers: 700000 },
  { month: "Apr", totalUsers: 1000000, activeUsers: 750000 },
  { month: "May", totalUsers: 1100000, activeUsers: 800000 },
  { month: "Jun", totalUsers: 1200000, activeUsers: 850000 },
];

const revenueData: RevenueData[] = [
  { name: "Subscriptions", value: 1500000 },
  { name: "Advertisements", value: 500000 },
  { name: "In-App Purchases", value: 300000 },
];

const topSongsData: SongData[] = [
  { name: "Cruel Summer - Taylor Swift", streams: 1850000 },
  { name: "vampire - Olivia Rodrigo", streams: 1520000 },
  { name: "Last Night - Morgan Wallen", streams: 1340000 },
  { name: "Kill Bill - SZA", streams: 1280000 },
  { name: "Anti-Hero - Taylor Swift", streams: 1150000 },
];

const COLORS: string[] = [
  "#3b82f6",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
];

const formatYAxis = (value: number): string => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(0)}K`;
  }
  return value.toString();
};

// Add type for the formatter function
type TooltipFormatterCallback = (
  value: number,
  name: string,
  props: any
) => [string, string];

const DataVisualization: React.FC = () => {
  const tooltipFormatter: TooltipFormatterCallback = (value) => [
    `${formatYAxis(value)} streams`,
    "Streams",
  ];

  return (
    <div className="charts-container">
      <div className="chart-wrapper">
        <h3>User Growth</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart
            data={userGrowthData}
            margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={formatYAxis} width={70} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="totalUsers"
              stroke="#3b82f6"
              name="Total Users"
            />
            <Line
              type="monotone"
              dataKey="activeUsers"
              stroke="#22c55e"
              name="Active Users"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="charts-row">
        <div className="chart-wrapper">
          <h3>Revenue Distribution</h3>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart margin={{ top: 20, right: 30, left: 30, bottom: 20 }}>
              <Pie
                data={revenueData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {revenueData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-wrapper">
          <h3>Top 5 Streamed Songs</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={topSongsData}
              margin={{ top: 20, right: 30, left: 30, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                angle={-45}
                textAnchor="end"
                height={80}
                interval={0}
                tick={{ fontSize: 11 }}
              />
              <YAxis tickFormatter={formatYAxis} width={70} />
              <Tooltip cursor={false} formatter={tooltipFormatter} />
              <Legend verticalAlign="top" height={36} />
              <Bar
                dataKey="streams"
                fill="#3b82f6"
                name="Streams"
                cursor="default"
                style={{ cursor: "default" }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DataVisualization;
