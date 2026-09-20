import { useState } from "react";
import { Camera, Save, Plus, Trash2, Briefcase, GraduationCap } from "lucide-react";

export default function Profile() {
  const [name, setName] = useState("Jane Doe");
  const [email, setEmail] = useState("jane.doe@example.com");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("Chattogram, Bangladesh");
  const [skills, setSkills] = useState("React, JavaScript, CSS");
  const [bio, setBio] = useState("");
  const [resumeFileName, setResumeFileName] = useState(null);

  const [experience, setExperience] = useState([
    { id: 1, title: "", company: "", duration: "", description: "" },
  ]);

  const [education, setEducation] = useState([
    { id: 1, degree: "", institute: "", duration: "" },
  ]);

  function handleResumeChange(e) {
    const file = e.target.files?.[0];
    if (file) setResumeFileName(file.name);
  }

  function handleSave(e) {
    e.preventDefault();
    alert("Profile saved (placeholder - no backend connected yet)");
  }

  function addExperience() {
    setExperience([
      ...experience,
      { id: Date.now(), title: "", company: "", duration: "", description: "" },
    ]);
  }

  function removeExperience(id) {
    setExperience(experience.filter((exp) => exp.id !== id));
  }

  function updateExperience(id, field, value) {
    setExperience(
      experience.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
    );
  }

  function addEducation() {
    setEducation([
      ...education,
      { id: Date.now(), degree: "", institute: "", duration: "" },
    ]);
  }

  function removeEducation(id) {
    setEducation(education.filter((edu) => edu.id !== id));
  }

  function updateEducation(id, field, value) {
    setEducation(
      education.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu))
    );
  }

  const cardStyle = {
    background: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "12px",
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

  const sectionHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.2rem",
  };

  const addButtonStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    background: "#DBEAFE",
    color: "#2563EB",
    border: "none",
    padding: "0.4rem 0.9rem",
    borderRadius: "8px",
    fontSize: "0.82rem",
    fontWeight: 600,
    cursor: "pointer",
  };

  const removeButtonStyle = {
    background: "#FEE2E2",
    color: "#B91C1C",
    border: "none",
    borderRadius: "6px",
    width: "28px",
    height: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  const entryBoxStyle = {
    border: "1px solid #F3F4F6",
    borderRadius: "10px",
    padding: "1rem",
    marginBottom: "1rem",
    position: "relative",
  };

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: "780px" }}>
      <h1 style={{ color: "#111827", marginBottom: "0.2rem" }}>Profile / Resume</h1>
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

        {/* Work Experience card */}
        <div style={cardStyle}>
          <div style={sectionHeaderStyle}>
            <h3 style={{ color: "#111827", margin: 0, fontSize: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Briefcase size={18} /> Work Experience
            </h3>
            <button type="button" style={addButtonStyle} onClick={addExperience}>
              <Plus size={14} /> Add
            </button>
          </div>

          {experience.map((exp, index) => (
            <div key={exp.id} style={entryBoxStyle}>
              {experience.length > 1 && (
                <button
                  type="button"
                  style={{ ...removeButtonStyle, position: "absolute", top: "0.8rem", right: "0.8rem" }}
                  onClick={() => removeExperience(exp.id)}
                >
                  <Trash2 size={14} />
                </button>
              )}

              <div style={{ display: "flex", gap: "1rem" }}>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>Job Title</label>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="e.g. Frontend Developer"
                    value={exp.title}
                    onChange={(e) => updateExperience(exp.id, "title", e.target.value)}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>Company</label>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="e.g. TechCorp"
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                  />
                </div>
              </div>

              <label style={labelStyle}>Duration</label>
              <input
                style={inputStyle}
                type="text"
                placeholder="e.g. Jan 2024 - Present"
                value={exp.duration}
                onChange={(e) => updateExperience(exp.id, "duration", e.target.value)}
              />

              <label style={labelStyle}>Description</label>
              <textarea
                style={{ ...inputStyle, minHeight: "60px", resize: "vertical", marginBottom: 0 }}
                placeholder="What did you do in this role?"
                value={exp.description}
                onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
              />
            </div>
          ))}
        </div>

        {/* Education card */}
        <div style={cardStyle}>
          <div style={sectionHeaderStyle}>
            <h3 style={{ color: "#111827", margin: 0, fontSize: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <GraduationCap size={18} /> Education
            </h3>
            <button type="button" style={addButtonStyle} onClick={addEducation}>
              <Plus size={14} /> Add
            </button>
          </div>

          {education.map((edu) => (
            <div key={edu.id} style={entryBoxStyle}>
              {education.length > 1 && (
                <button
                  type="button"
                  style={{ ...removeButtonStyle, position: "absolute", top: "0.8rem", right: "0.8rem" }}
                  onClick={() => removeEducation(edu.id)}
                >
                  <Trash2 size={14} />
                </button>
              )}

              <div style={{ display: "flex", gap: "1rem" }}>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>Degree</label>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="e.g. BSc in CSE"
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>Institute</label>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="e.g. University name"
                    value={edu.institute}
                    onChange={(e) => updateEducation(edu.id, "institute", e.target.value)}
                  />
                </div>
              </div>

              <label style={labelStyle}>Duration</label>
              <input
                style={{ ...inputStyle, marginBottom: 0 }}
                type="text"
                placeholder="e.g. 2022 - 2026"
                value={edu.duration}
                onChange={(e) => updateEducation(edu.id, "duration", e.target.value)}
              />
            </div>
          ))}
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