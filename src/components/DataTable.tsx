import { useState, useMemo } from "react";
import "./DataTable.css";

interface StreamData {
  id: number;
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
}

interface SortConfig {
  key: keyof StreamData;
  direction: "asc" | "desc";
}

const mockData: StreamData[] = [
  {
    id: 1,
    songName: "Midnight Rain",
    artist: "Taylor Swift",
    dateStreamed: "2024-03-15",
    streamCount: 125000,
    userId: "USER123",
  },
  {
    id: 2,
    songName: "Flowers",
    artist: "Miley Cyrus",
    dateStreamed: "2024-03-14",
    streamCount: 98000,
    userId: "USER456",
  },
  {
    id: 3,
    songName: "Anti-Hero",
    artist: "Taylor Swift",
    dateStreamed: "2024-03-13",
    streamCount: 115000,
    userId: "USER789",
  },
  {
    id: 4,
    songName: "As It Was",
    artist: "Harry Styles",
    dateStreamed: "2024-03-12",
    streamCount: 88000,
    userId: "USER101",
  },
  {
    id: 5,
    songName: "Unholy",
    artist: "Sam Smith",
    dateStreamed: "2024-03-11",
    streamCount: 76000,
    userId: "USER202",
  },
];

const DataTable: React.FC = () => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "dateStreamed",
    direction: "desc",
  });
  const [filterText, setFilterText] = useState<string>("");

  const handleSort = (key: keyof StreamData) => {
    setSortConfig((prevConfig) => ({
      key,
      direction:
        prevConfig.key === key && prevConfig.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  const sortedAndFilteredData = useMemo(() => {
    let filteredData = [...mockData];
    if (filterText) {
      const searchText = filterText.toLowerCase();
      filteredData = filteredData.filter(
        (item) =>
          item.songName.toLowerCase().includes(searchText) ||
          item.artist.toLowerCase().includes(searchText)
      );
    }
    return filteredData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [mockData, sortConfig, filterText]);

  return (
    <div className="data-table-container">
      <div className="table-controls">
        <input
          type="text"
          placeholder="Search by song or artist..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th onClick={() => handleSort("songName")}>
                Song Name{" "}
                {sortConfig.key === "songName"
                  ? sortConfig.direction === "asc"
                    ? "↑"
                    : "↓"
                  : "↕️"}
              </th>
              <th onClick={() => handleSort("artist")}>
                Artist{" "}
                {sortConfig.key === "artist"
                  ? sortConfig.direction === "asc"
                    ? "↑"
                    : "↓"
                  : "↕️"}
              </th>
              <th onClick={() => handleSort("dateStreamed")}>
                Date Streamed{" "}
                {sortConfig.key === "dateStreamed"
                  ? sortConfig.direction === "asc"
                    ? "↑"
                    : "↓"
                  : "↕️"}
              </th>
              <th onClick={() => handleSort("streamCount")}>
                Stream Count{" "}
                {sortConfig.key === "streamCount"
                  ? sortConfig.direction === "asc"
                    ? "↑"
                    : "↓"
                  : "↕️"}
              </th>
              <th onClick={() => handleSort("userId")}>
                User ID{" "}
                {sortConfig.key === "userId"
                  ? sortConfig.direction === "asc"
                    ? "↑"
                    : "↓"
                  : "↕️"}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedAndFilteredData.map((row) => (
              <tr key={row.id}>
                <td>{row.songName}</td>
                <td>{row.artist}</td>
                <td>{row.dateStreamed}</td>
                <td>{row.streamCount.toLocaleString()}</td>
                <td>{row.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
