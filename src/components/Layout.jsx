import { Outlet } from "react-router-dom";
import { Search, Bell } from "lucide-react";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div style={{ minHeight: "100vh", background: "#F9FAFB" }}>
      <Sidebar />

      <div style={{ marginLeft: "230px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
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
              width: "320px",
              color: "#9CA3AF",
            }}
          >
            <Search size={16} />
            <span style={{ fontSize: "0.85rem" }}>Search jobs, applications...</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
            <Bell size={20} color="#6B7280" />
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "#DBEAFE",
                  color: "#2563EB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                J
              </div>
              <span style={{ color: "#111827", fontWeight: 600, fontSize: "0.9rem" }}>
                Jane Doe
              </span>
            </div>
          </div>
        </div>

        <main style={{ padding: "2rem" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}