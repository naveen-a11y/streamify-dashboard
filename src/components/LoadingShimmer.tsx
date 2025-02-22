import "./LoadingShimmer.css";

type LoadingShimmerProps = {
  type: "metrics" | "charts" | "table";
};

const LoadingShimmer: React.FC<LoadingShimmerProps> = ({ type }) => {
  if (type === "metrics") {
    return (
      <div className="metrics-grid">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="metric-card shimmer">
            <div className="metric-icon-shimmer" />
            <div className="metric-info">
              <div className="shimmer-line" style={{ width: "60%" }} />
              <div className="shimmer-line" style={{ width: "40%" }} />
              <div className="shimmer-line" style={{ width: "30%" }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "charts") {
    return (
      <div className="charts-container">
        <div className="chart-wrapper shimmer">
          <div
            className="shimmer-line"
            style={{ width: "30%", height: "24px" }}
          />
          <div className="chart-shimmer" />
        </div>
        <div className="charts-row">
          <div className="chart-wrapper shimmer">
            <div
              className="shimmer-line"
              style={{ width: "30%", height: "24px" }}
            />
            <div className="chart-shimmer" />
          </div>
          <div className="chart-wrapper shimmer">
            <div
              className="shimmer-line"
              style={{ width: "30%", height: "24px" }}
            />
            <div className="chart-shimmer" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "table") {
    return (
      <div className="data-table-container">
        <div className="table-controls">
          <div className="shimmer-line search-shimmer" />
        </div>
        <div className="table-wrapper">
          <table className="data-table shimmer">
            <thead>
              <tr>
                {[...Array(5)].map((_, index) => (
                  <th key={index}>
                    <div className="shimmer-line" />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {[...Array(5)].map((_, colIndex) => (
                    <td key={colIndex}>
                      <div className="shimmer-line" />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return null;
};

export default LoadingShimmer;
