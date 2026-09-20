import { useState } from "react";
import { Search } from "lucide-react";

const MOCK_APPLICATIONS = [
  {
    id: "1",
    jobTitle: "Senior Frontend Engineer",
    company: "Northbridge",
    dateApplied: "2026-09-17",
    status: "Reviewing",
  },
  {
    id: "2",
    jobTitle: "Product Designer",
    company: "Chattogram Labs",
    dateApplied: "2026-09-15",
    status: "Applied",
  },
  {
    id: "3",
    jobTitle: "Backend Engineer (Node.js)",
    company: "CloudNine",
    dateApplied: "2026-09-13",
    status: "Interview",
  },
  {
    id: "4",
    jobTitle: "UI/UX Designer",
    company: "DesignHub",
    dateApplied: "2026-08-20",
    status: "Rejected",
  },
  {
    id: "5",
    jobTitle: "Marketing Manager",
    company: "Dhaka Retail",
    dateApplied: "2026-08-05",
    status: "Hired",
  },
];

const STATUS_TABS = ["All", "Applied", "Reviewing", "Interview", "Rejected", "Hired"];

function statusStyle(status) {
  switch (status) {
    case "Interview":
      return { background: "#111827", color: "#FFFFFF" };
    case "Reviewing":
      return { background: "#F3F4F6", color: "#374151" };
    case "Applied":
      return { background: "#DBEAFE", color: "#2563EB" };
    case "Rejected":
      return { background: "#FEE2E2", color: "#B91C1C" };
    case "Hired":
      return { background: "#D1FAE5", color: "#047857" };
    default:
      return { background: "#F3F4F6", color: "#6B7280" };
  }
}

export default function MyApplications() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const filtered = MOCK_APPLICATIONS.filter((app) => {
    const matchesSearch =
      app.jobTitle.toLowerCase().includes(search.toLowerCase()) ||
      app.company.toLowerCase().includes(search.toLowerCase());
    const matchesTab = activeTab === "All" || app.status === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h1 style={{ color: "#111827", marginBottom: "0.2rem" }}>My Applications</h1>
      <p style={{ color: "#6B7280", marginBottom: "1.5rem" }}>
        Track the status of jobs you've applied to.
      </p>

      {/* Search bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          border: "1px solid #E5E7EB",
          borderRadius: "8px",
          padding: "0.6rem 1rem",
          width: "320px",
          marginBottom: "1.2rem",
          background: "#FFFFFF",
        }}
      >
        <Search size={16} color="#9CA3AF" />
        <input
          style={{
            border: "none",
            outline: "none",
            fontSize: "0.9rem",
            width: "100%",
          }}
          type="text"
          placeholder="Search by job title or company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Status tabs */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        {STATUS_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              background: activeTab === tab ? "#2563EB" : "#FFFFFF",
              color: activeTab === tab ? "#FFFFFF" : "#374151",
              fontSize: "0.85rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: "10px",
          padding: "1.5rem",
        }}
      >
        {filtered.length === 0 ? (
          <p style={{ color: "#6B7280", textAlign: "center", padding: "2rem 0" }}>
            No applications match your search/filter.
          </p>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ textAlign: "left", borderBottom: "1px solid #E5E7EB" }}>
                <th style={{ padding: "0.6rem 0", color: "#6B7280", fontSize: "0.8rem" }}>Role</th>
                <th style={{ padding: "0.6rem 0", color: "#6B7280", fontSize: "0.8rem" }}>Company</th>
                <th style={{ padding: "0.6rem 0", color: "#6B7280", fontSize: "0.8rem" }}>Applied</th>
                <th style={{ padding: "0.6rem 0", color: "#6B7280", fontSize: "0.8rem" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((app) => (
                <tr key={app.id} style={{ borderBottom: "1px solid #F3F4F6" }}>
                  <td style={{ padding: "0.8rem 0", color: "#111827", fontWeight: 600 }}>
                    {app.jobTitle}
                  </td>
                  <td style={{ padding: "0.8rem 0", color: "#6B7280" }}>{app.company}</td>
                  <td style={{ padding: "0.8rem 0", color: "#6B7280" }}>{app.dateApplied}</td>
                  <td style={{ padding: "0.8rem 0" }}>
                    <span
                      style={{
                        ...statusStyle(app.status),
                        padding: "0.25rem 0.7rem",
                        borderRadius: "9999px",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                      }}
                    >
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}