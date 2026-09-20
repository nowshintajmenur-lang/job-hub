import { NavLink } from "react-router-dom";
import { LayoutGrid, User, FileText, Briefcase } from "lucide-react";

export default function Sidebar() {
  const linkStyle = ({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    padding: "0.7rem 1rem",
    borderRadius: "8px",
    marginBottom: "0.3rem",
    textDecoration: "none",
    color: isActive ? "#FFFFFF" : "#9CA3AF",
    background: isActive ? "#2563EB" : "transparent",
    fontWeight: isActive ? 600 : 500,
    fontSize: "0.9rem",
  });

  return (
    <div
      style={{
        width: "230px",
        minHeight: "100vh",
        background: "#111827",
        padding: "1.5rem 1rem",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <div style={{ marginBottom: "2rem", paddingLeft: "0.5rem" }}>
        <h2 style={{ color: "#FFFFFF", fontSize: "1.3rem", margin: 0 }}>JobHub</h2>
        <p style={{ color: "#9CA3AF", fontSize: "0.8rem", margin: 0 }}>
          Job seeker workspace
        </p>
      </div>

      <nav>
        <NavLink to="/dashboard" style={linkStyle}>
          <LayoutGrid size={18} /> Overview
        </NavLink>
        <NavLink to="/profile" style={linkStyle}>
          <User size={18} /> Profile / CV
        </NavLink>
        <NavLink to="/my-applications" style={linkStyle}>
          <FileText size={18} /> My Applications
        </NavLink>
        <NavLink to="/jobs" style={linkStyle}>
          <Briefcase size={18} /> Browse Jobs
        </NavLink>
      </nav>
    </div>
  );
}