import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email && form.password) {
      localStorage.setItem("token", "demo");
      navigate("/dashboard");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back 👋</h2>
        <p style={styles.subtitle}>Login to Community Forum</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            style={styles.input}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            style={styles.input}
          />

          <button style={styles.button}>Login</button>
        </form>

        <p style={styles.bottomText}>
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  bg: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#667eea,#764ba2)",
    fontFamily: "Arial",
  },
  card: {
    width: 320,
    padding: 25,
    borderRadius: 15,
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
    color: "white",
  },
  title: { marginBottom: 5 },
  subtitle: { fontSize: 13, opacity: 0.8, marginBottom: 20 },
  form: { display: "flex", flexDirection: "column", gap: 12 },
  input: {
    padding: 10,
    borderRadius: 8,
    border: "none",
    outline: "none",
  },
  button: {
    padding: 10,
    borderRadius: 8,
    border: "none",
    background: "#000",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
  bottomText: {
    marginTop: 15,
    fontSize: 12,
    textAlign: "center",
  },
};