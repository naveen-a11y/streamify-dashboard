import "./KeyMetrics.css";

interface Metric {
  title: string;
  value: string;
  change: string;
  icon: string;
}

const metrics: Metric[] = [
  {
    title: "Total Users",
    value: "1.2M",
    change: "+12%",
    icon: "👥",
  },
  {
    title: "Active Users",
    value: "850K",
    change: "+8%",
    icon: "🎧",
  },
  {
    title: "Total Streams",
    value: "4.5M",
    change: "+15%",
    icon: "🎵",
  },
  {
    title: "Revenue",
    value: "$2.3M",
    change: "+20%",
    icon: "💰",
  },
  {
    title: "Top Artist",
    value: "Taylor Swift",
    change: "No change",
    icon: "🎤",
  },
];

const KeyMetrics: React.FC = () => {
  return (
    <div className="metrics-grid">
      {metrics.map((metric, index) => (
        <div key={index} className="metric-card">
          <div className="metric-icon">{metric.icon}</div>
          <div className="metric-info">
            <h3>{metric.title}</h3>
            <div className="metric-value">{metric.value}</div>
            <div
              className={`metric-change ${
                metric.change.includes("+") ? "positive" : ""
              }`}
            >
              {metric.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KeyMetrics;
