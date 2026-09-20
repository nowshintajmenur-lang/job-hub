export default function Dashboard() {
  const stats = [
    { label: "Applications Sent", value: "12", change: "+2 this week" },
    { label: "Interviews", value: "3", change: "+1 this week" },
    { label: "Profile Views", value: "48", change: "+12% vs last week" },
    { label: "Saved Jobs", value: "5", change: "Goal: 10" },
  ];

  const applications = [
    { title: "Senior Frontend Engineer", company: "Northbridge", date: "3d ago", status: "Reviewing" },
    { title: "Product Designer", company: "Chattogram Labs", date: "5d ago", status: "Applied" },
    { title: "Backend Engineer (Node.js)", company: "CloudNine", date: "1w ago", status: "Interview" },
  ];

  const statusStyle = (status) => {
    switch (status) {
      case "Interview":
        return { background: "#111827", color: "#FFFFFF" };
      case "Reviewing":
        return { background: "#F3F4F6", color: "#374151" };
      default:
        return { background: "#DBEAFE", color: "#2563EB" };
    }
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h1 style={{ color: "#111827", marginBottom: "0.2rem" }}>Good morning, Jane</h1>
      <p style={{ color: "#6B7280", marginBottom: "1.5rem" }}>
        Here's how your job search is going.
      </p>

      {/* Stat cards */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              flex: 1,
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
              padding: "1.25rem",
            }}
          >
            <p style={{ color: "#6B7280", fontSize: "0.85rem", margin: 0 }}>{s.label}</p>
            <h2 style={{ color: "#111827", fontSize: "1.8rem", margin: "0.3rem 0" }}>
              {s.value}
            </h2>
            <p style={{ color: "#2563EB", fontSize: "0.8rem", margin: 0 }}>{s.change}</p>
          </div>
        ))}
      </div>

      {/* Applications table */}
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: "10px",
          padding: "1.5rem",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
          <h3 style={{ color: "#111827", margin: 0 }}>Recent Applications</h3>
          <span style={{ color: "#2563EB", fontSize: "0.85rem", cursor: "pointer" }}>
            View all →
          </span>
        </div>

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
            {applications.map((app) => (
              <tr key={app.title} style={{ borderBottom: "1px solid #F3F4F6" }}>
                <td style={{ padding: "0.8rem 0", color: "#111827", fontWeight: 600 }}>
                  {app.title}
                </td>
                <td style={{ padding: "0.8rem 0", color: "#6B7280" }}>{app.company}</td>
                <td style={{ padding: "0.8rem 0", color: "#6B7280" }}>{app.date}</td>
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
      </div>
    </div>
  );
}