import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Rocket,
  Upload,
  UserCog,
  BellRing,
  ChevronRight,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    { label: "Applications Sent", value: "12", color: "#2563EB", bg: "#DBEAFE" },
    { label: "Interviews", value: "3", color: "#059669", bg: "#D1FAE5" },
    { label: "Profile Views", value: "48", color: "#D97706", bg: "#FEF3C7" },
    { label: "Saved Jobs", value: "5", color: "#DB2777", bg: "#FCE7F3" },
  ];

  const recommendedJobs = [
    { title: "Frontend Developer", company: "Tech Innovate Ltd", location: "Chattogram, Bangladesh", type: "Full Time", salary: "৳25,000 - 40,000/month", letter: "T" },
    { title: "Web Developer (MERN Stack)", company: "SoftTech Solutions", location: "Dhaka, Bangladesh", type: "Full Time", salary: "৳30,000 - 45,000/month", letter: "S" },
    { title: "Junior Software Engineer", company: "Global IT Limited", location: "Chattogram, Bangladesh", type: "Internship", salary: "৳15,000 - 20,000/month", letter: "G" },
  ];

  const applications = [
    { title: "Frontend Developer", company: "TechNexus Ltd", date: "Sep 12, 2026", status: "In Review" },
    { title: "Web Developer (MERN Stack)", company: "SoftTech Solutions", date: "Sep 9, 2026", status: "Shortlisted" },
    { title: "UI/UX Designer", company: "NexGen Digital", date: "Sep 5, 2026", status: "Interview" },
  ];

  const savedJobs = [
    { title: "Frontend Developer", company: "TechNexus Ltd", letter: "T" },
    { title: "Web Developer (MERN Stack)", company: "SoftTech Solutions", letter: "S" },
    { title: "UI/UX Designer", company: "NexGen Digital", letter: "N" },
  ];

  const appStatusStyle = (status) => {
    switch (status) {
      case "Interview":
        return { background: "#111827", color: "#FFFFFF" };
      case "Shortlisted":
        return { background: "#D1FAE5", color: "#047857" };
      case "Rejected":
        return { background: "#FEE2E2", color: "#B91C1C" };
      default:
        return { background: "#F3F4F6", color: "#374151" };
    }
  };

  const typeStyle = (type) => {
    switch (type) {
      case "Internship":
        return { background: "#FEF3C7", color: "#B45309" };
      case "Part Time":
        return { background: "#FCE7F3", color: "#BE185D" };
      default:
        return { background: "#D1FAE5", color: "#047857" };
    }
  };

  const cardStyle = {
    background: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "12px",
    padding: "1.5rem",
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h1 style={{ color: "#111827", marginBottom: "0.2rem" }}>Good Morning, Jane 👋</h1>
      <p style={{ color: "#6B7280", marginBottom: "1.5rem" }}>
        Here's what's happening with your job search today.
      </p>

      {/* Profile summary + stats row */}
      <div style={{ ...cardStyle, display: "flex", alignItems: "center", gap: "2rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", minWidth: "220px" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "#DBEAFE",
              color: "#2563EB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.4rem",
              fontWeight: 700,
            }}
          >
            J
          </div>
          <div>
            <h3 style={{ margin: 0, color: "#111827" }}>Jane Doe</h3>
            <p style={{ margin: "0.1rem 0", color: "#6B7280", fontSize: "0.85rem" }}>Job Seeker</p>
            <p style={{ margin: 0, color: "#2563EB", fontSize: "0.8rem", fontWeight: 600 }}>
              Profile completion: 80%
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "1.5rem", flex: 1, flexWrap: "wrap" }}>
          {stats.map((s) => (
            <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: s.bg,
                  color: s.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                }}
              >
                {s.value}
              </div>
              <span style={{ color: "#6B7280", fontSize: "0.8rem" }}>{s.label}</span>
            </div>
          ))}
        </div>

        <button
          style={{
            background: "#2563EB",
            color: "#FFFFFF",
            border: "none",
            padding: "0.6rem 1.2rem",
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "0.85rem",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Complete Profile
        </button>
      </div>

      {/* Two column layout */}
      <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", flexWrap: "wrap" }}>
        {/* Left column */}
        <div style={{ flex: 2, minWidth: "340px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Recommended jobs */}
          <div style={cardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
              <h3 style={{ margin: 0, color: "#111827" }}>Recommended Jobs</h3>
              <span style={{ color: "#2563EB", fontSize: "0.85rem", cursor: "pointer" }}>View all →</span>
            </div>

            {recommendedJobs.map((job) => (
              <div
                key={job.title}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.9rem 0",
                  borderBottom: "1px solid #F3F4F6",
                  flexWrap: "wrap",
                  gap: "0.6rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "8px",
                      background: "#111827",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    {job.letter}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <p style={{ margin: 0, color: "#111827", fontWeight: 600 }}>{job.title}</p>
                      <span
                        style={{
                          ...typeStyle(job.type),
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          padding: "0.15rem 0.5rem",
                          borderRadius: "9999px",
                        }}
                      >
                        {job.type}
                      </span>
                    </div>
                    <p style={{ margin: "0.15rem 0 0", color: "#6B7280", fontSize: "0.8rem" }}>
                      {job.company} · {job.location}
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ color: "#6B7280", fontSize: "0.8rem" }}>{job.salary}</span>
                  <button
                    style={{
                      background: "#2563EB",
                      color: "#FFFFFF",
                      border: "none",
                      padding: "0.45rem 1rem",
                      borderRadius: "8px",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Recent applications */}
          <div style={cardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
              <h3 style={{ margin: 0, color: "#111827" }}>Recent Applications</h3>
              <span style={{ color: "#2563EB", fontSize: "0.85rem", cursor: "pointer" }}>View all →</span>
            </div>

            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ textAlign: "left", borderBottom: "1px solid #E5E7EB" }}>
                  <th style={{ padding: "0.5rem 0", color: "#6B7280", fontSize: "0.78rem" }}>Job Title</th>
                  <th style={{ padding: "0.5rem 0", color: "#6B7280", fontSize: "0.78rem" }}>Company</th>
                  <th style={{ padding: "0.5rem 0", color: "#6B7280", fontSize: "0.78rem" }}>Applied Date</th>
                  <th style={{ padding: "0.5rem 0", color: "#6B7280", fontSize: "0.78rem" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.title} style={{ borderBottom: "1px solid #F3F4F6" }}>
                    <td style={{ padding: "0.7rem 0", color: "#111827", fontWeight: 600, fontSize: "0.85rem" }}>
                      {app.title}
                    </td>
                    <td style={{ padding: "0.7rem 0", color: "#6B7280", fontSize: "0.85rem" }}>{app.company}</td>
                    <td style={{ padding: "0.7rem 0", color: "#6B7280", fontSize: "0.85rem" }}>{app.date}</td>
                    <td style={{ padding: "0.7rem 0" }}>
                      <span
                        style={{
                          ...appStatusStyle(app.status),
                          padding: "0.25rem 0.7rem",
                          borderRadius: "9999px",
                          fontSize: "0.75rem",
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

        {/* Right column */}
        <div style={{ flex: 1, minWidth: "260px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Opportunity card */}
          <div
            style={{
              background: "#111827",
              borderRadius: "12px",
              padding: "1.5rem",
              color: "#FFFFFF",
            }}
          >
            <Rocket size={28} color="#2563EB" />
            <h3 style={{ margin: "0.8rem 0 0.3rem", fontSize: "1rem" }}>
              Your next opportunity is just a search away!
            </h3>
            <p style={{ margin: 0, color: "#9CA3AF", fontSize: "0.82rem" }}>
              Keep applying, keep growing.
            </p>
          </div>

          {/* Profile summary */}
          <div style={cardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
              <h3 style={{ margin: 0, color: "#111827", fontSize: "1rem" }}>Profile Summary</h3>
              <span style={{ color: "#2563EB", fontSize: "0.8rem", cursor: "pointer" }}>Edit</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <Mail size={16} color="#6B7280" />
                <span style={{ color: "#374151", fontSize: "0.85rem" }}>jane.doe@example.com</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <Phone size={16} color="#6B7280" />
                <span style={{ color: "#374151", fontSize: "0.85rem" }}>+880 1XXXXXXXXX</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <MapPin size={16} color="#6B7280" />
                <span style={{ color: "#374151", fontSize: "0.85rem" }}>Chattogram, Bangladesh</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <GraduationCap size={16} color="#6B7280" />
                <span style={{ color: "#374151", fontSize: "0.85rem" }}>BSc CSE (7th Semester)</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div style={cardStyle}>
            <h3 style={{ margin: "0 0 1rem", color: "#111827", fontSize: "1rem" }}>Quick Links</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {[
                { icon: Upload, color: "#2563EB", bg: "#DBEAFE", label: "Upload Resume", sub: "PDF, DOC (Max 2MB)" },
                { icon: UserCog, color: "#7C3AED", bg: "#EDE9FE", label: "Update Profile", sub: "Add skills, experience" },
                { icon: BellRing, color: "#DB2777", bg: "#FCE7F3", label: "Job Alerts", sub: "Get notified about new jobs" },
              ].map(({ icon: Icon, color, bg, label, sub }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        background: bg,
                        color: color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={17} />
                    </div>
                    <div>
                      <p style={{ margin: 0, color: "#111827", fontSize: "0.85rem", fontWeight: 600 }}>
                        {label}
                      </p>
                      <p style={{ margin: 0, color: "#9CA3AF", fontSize: "0.72rem" }}>{sub}</p>
                    </div>
                  </div>
                  <ChevronRight size={16} color="#9CA3AF" />
                </div>
              ))}
            </div>
          </div>

          {/* Saved jobs */}
          <div style={cardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
              <h3 style={{ margin: 0, color: "#111827", fontSize: "1rem" }}>Saved Jobs</h3>
              <span style={{ color: "#2563EB", fontSize: "0.8rem", cursor: "pointer" }}>View all →</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {savedJobs.map((job) => (
                <div key={job.title} style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                  <div
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "8px",
                      background: "#F3F4F6",
                      color: "#374151",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                    }}
                  >
                    {job.letter}
                  </div>
                  <div>
                    <p style={{ margin: 0, color: "#111827", fontSize: "0.82rem", fontWeight: 600 }}>
                      {job.title}
                    </p>
                    <p style={{ margin: 0, color: "#6B7280", fontSize: "0.75rem" }}>{job.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}