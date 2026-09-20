import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  Search,
  FileText,
  Heart,
  User,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const linkStyle = ({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    padding: "0.65rem 1rem",
    borderRadius: "8px",
    marginBottom: "0.2rem",
    textDecoration: "none",
    color: isActive ? "#FFFFFF" : "#9CA3AF",
    background: isActive ? "#2563EB" : "transparent",
    fontWeight: isActive ? 600 : 500,
    fontSize: "0.88rem",
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div style={{ marginBottom: "2rem", paddingLeft: "0.5rem" }}>
          <h2 style={{ color: "#FFFFFF", fontSize: "1.3rem", margin: 0 }}>
            Job<span style={{ color: "#2563EB" }}>Hub</span>
          </h2>
          <p style={{ color: "#9CA3AF", fontSize: "0.75rem", margin: 0 }}>
            Find your next opportunity
          </p>
        </div>

        <nav>
          <NavLink to="/dashboard" style={linkStyle}>
            <LayoutGrid size={17} /> Dashboard
          </NavLink>
          <NavLink to="/jobs" style={linkStyle}>
            <Search size={17} /> Find Jobs
          </NavLink>
          <NavLink to="/my-applications" style={linkStyle}>
            <FileText size={17} /> My Applications
          </NavLink>
          <NavLink to="/saved-jobs" style={linkStyle}>
            <Heart size={17} /> Saved Jobs
          </NavLink>
          <NavLink to="/profile" style={linkStyle}>
            <User size={17} /> Profile / Resume
          </NavLink>
          <NavLink to="/messages" style={linkStyle}>
            <MessageSquare size={17} /> Messages
          </NavLink>
          <NavLink to="/notifications" style={linkStyle}>
            <Bell size={17} /> Notifications
          </NavLink>
          <NavLink to="/settings" style={linkStyle}>
            <Settings size={17} /> Settings
          </NavLink>
        </nav>
      </div>

      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          background: "transparent",
          border: "none",
          color: "#9CA3AF",
          fontSize: "0.88rem",
          cursor: "pointer",
          padding: "0.65rem 1rem",
        }}
      >
        <LogOut size={17} /> Logout
      </button>
    </div>
  );
}