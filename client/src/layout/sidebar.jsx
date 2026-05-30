import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h2 style={{ color: "white" }}>Community</h2>

      <Link style={styles.link} to="/dashboard">🏠 Dashboard</Link>
      <Link style={styles.link} to="/discussions">🧵 Discussions</Link>
      <Link style={styles.link} to="/chat">💬 Chat</Link>
    </div>
  );
}

const styles = {
  sidebar: {
    width: 220,
    height: "100vh",
    background: "#0f172a",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  link: {
    color: "white",
    textDecoration: "none",
    padding: 10,
    background: "#1e293b",
    borderRadius: 8,
  },
};