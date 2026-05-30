import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={styles.bg}>
      <div style={styles.nav}>
        <h2>Community Forum 🚀</h2>
        <button onClick={logout} style={styles.logout}>
          Logout
        </button>
      </div>

      <div style={styles.container}>
        <h1 style={styles.heading}>You are working 🎉</h1>
        <p style={styles.sub}>Your Full Stack App is running successfully</p>

        <div style={styles.grid}>
          <div style={styles.card}>📢 Discussions</div>
          <div style={styles.card}>💬 Real-time Chat</div>
          <div style={styles.card}>👥 Community</div>
          <div style={styles.card}>🔔 Notifications</div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  bg: {
    minHeight: "100vh",
    background: "#0f172a",
    color: "white",
    fontFamily: "Arial",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
    background: "#111827",
  },
  logout: {
    padding: "8px 15px",
    background: "red",
    color: "white",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
  },
  container: {
    padding: 30,
  },
  heading: {
    fontSize: 30,
  },
  sub: {
    opacity: 0.7,
    marginBottom: 20,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: 15,
    marginTop: 20,
  },
  card: {
    padding: 20,
    background: "#1e293b",
    borderRadius: 10,
    textAlign: "center",
    cursor: "pointer",
  },
};