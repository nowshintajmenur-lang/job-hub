import { Outlet } from "react-router-dom";
import { Search, Bell } from "lucide-react";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div style={{ minHeight: "100vh", background: "#F9FAFB" }}>
      <Sidebar />

      <div style={{ marginLeft: "230px" }}>
        {/* Top header */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "1rem",
            padding: "1rem 2rem",
            borderBottom: "1px solid #E5E7EB",
            background: "#FFFFFF",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
              padding: "0.5rem 0.9rem",
              width: "260px",
              color: "#9CA3AF",
            }}
          >
            <Search size={16} />
            <span style={{ fontSize: "0.85rem" }}>Search jobs, applications...</span>
          </div>

          <Bell size={20} color="#6B7280" />
        </div>

        {/* Page content */}
        <main style={{ padding: "2rem" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}