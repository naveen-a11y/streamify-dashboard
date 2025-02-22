import { Suspense, lazy } from "react";
import "./App.css";
import LoadingShimmer from "./components/LoadingShimmer";

// Lazy load components
const KeyMetrics = lazy(() => import("./components/KeyMetrics"));
const DataVisualization = lazy(() => import("./components/DataVisualization"));
const DataTable = lazy(() => import("./components/DataTable"));

const App: React.FC = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Streamify Analytics Dashboard</h1>
        <p className="subtitle">
          Real-time insights for your music streaming platform
        </p>
      </header>

      <main className="dashboard-content">
        <section className="metrics-section">
          <h2>Key Metrics</h2>
          <Suspense fallback={<LoadingShimmer type="metrics" />}>
            <KeyMetrics />
          </Suspense>
        </section>

        <section className="visualization-section">
          <h2>Data Visualization</h2>
          <Suspense fallback={<LoadingShimmer type="charts" />}>
            <DataVisualization />
          </Suspense>
        </section>

        <section className="table-section">
          <h2>Recent Streams</h2>
          <Suspense fallback={<LoadingShimmer type="table" />}>
            <DataTable />
          </Suspense>
        </section>
      </main>
    </div>
  );
};

export default App;
