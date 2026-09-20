import { useState } from "react";
import { Camera, Save } from "lucide-react";

export default function Profile() {
  const [name, setName] = useState("Jane Doe");
  const [email, setEmail] = useState("jane.doe@example.com");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("Chattogram, Bangladesh");
  const [skills, setSkills] = useState("React, JavaScript, CSS");
  const [bio, setBio] = useState("");
  const [resumeFileName, setResumeFileName] = useState(null);

  function handleResumeChange(e) {
    const file = e.target.files?.[0];
    if (file) setResumeFileName(file.name);
  }

  function handleSave(e) {
    e.preventDefault();
    alert("Profile saved (placeholder - no backend connected yet)");
  }

  const cardStyle = {
    background: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "10px",
    padding: "1.5rem",
    marginBottom: "1.5rem",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "0.4rem",
    color: "#111827",
    fontWeight: 600,
    fontSize: "0.85rem",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.6rem 0.8rem",
    borderRadius: "8px",
    border: "1px solid #E5E7EB",
    marginBottom: "1.1rem",
    fontSize: "0.9rem",
    boxSizing: "border-box",
  };

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: "760px" }}>
      <h1 style={{ color: "#111827", marginBottom: "0.2rem" }}>Profile / CV Management</h1>
      <p style={{ color: "#6B7280", marginBottom: "1.5rem" }}>
        Keep your profile up to date so employers can find you.
      </p>

      {/* Profile header card */}
      <div style={{ ...cardStyle, display: "flex", alignItems: "center", gap: "1.25rem" }}>
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: "#DBEAFE",
            color: "#2563EB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.6rem",
            fontWeight: 700,
            position: "relative",
          }}
        >
          {name.charAt(0)}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              background: "#2563EB",
              borderRadius: "50%",
              width: "26px",
              height: "26px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Camera size={14} color="#FFFFFF" />
          </div>
        </div>
        <div>
          <h2 style={{ margin: 0, color: "#111827" }}>{name}</h2>
          <p style={{ margin: "0.2rem 0 0", color: "#6B7280", fontSize: "0.9rem" }}>{location}</p>
        </div>
      </div>

      <form onSubmit={handleSave}>
        {/* Personal info card */}
        <div style={cardStyle}>
          <h3 style={{ color: "#111827", marginTop: 0, marginBottom: "1rem", fontSize: "1rem" }}>
            Personal Information
          </h3>

          <div style={{ display: "flex", gap: "1rem" }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Full Name</label>
              <input
                style={inputStyle}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Phone</label>
              <input
                style={inputStyle}
                type="tel"
                placeholder="+880 1XXXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Email</label>
              <input
                style={inputStyle}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Location</label>
              <input
                style={inputStyle}
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          <label style={labelStyle}>Short Bio</label>
          <textarea
            style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }}
            placeholder="A short summary about yourself..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>

        {/* Skills card */}
        <div style={cardStyle}>
          <h3 style={{ color: "#111827", marginTop: 0, marginBottom: "1rem", fontSize: "1rem" }}>
            Skills
          </h3>
          <label style={labelStyle}>Skills (comma separated)</label>
          <input
            style={inputStyle}
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {skills
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean)
              .map((skill) => (
                <span
                  key={skill}
                  style={{
                    background: "#DBEAFE",
                    color: "#2563EB",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "9999px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                  }}
                >
                  {skill}
                </span>
              ))}
          </div>
        </div>

        {/* Resume card */}
        <div style={cardStyle}>
          <h3 style={{ color: "#111827", marginTop: 0, marginBottom: "1rem", fontSize: "1rem" }}>
            Resume / CV
          </h3>
          <input type="file" onChange={handleResumeChange} />
          {resumeFileName && (
            <p style={{ color: "#6B7280", fontSize: "0.85rem", marginTop: "0.7rem" }}>
              Selected: {resumeFileName}
            </p>
          )}
        </div>

        <button
          type="submit"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "#2563EB",
            color: "#FFFFFF",
            border: "none",
            padding: "0.8rem 1.8rem",
            borderRadius: "8px",
            fontSize: "0.95rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          <Save size={16} /> Save Profile
        </button>
      </form>
    </div>
  );
}