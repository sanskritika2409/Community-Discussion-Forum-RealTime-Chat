import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    { text: "Hello 👋", me: false },
    { text: "Hey! Welcome to Community", me: true },
  ]);

  const [text, setText] = useState("");

  const send = () => {
    if (!text) return;
    setMessages([...messages, { text, me: true }]);
    setText("");
  };

  return (
    <div style={styles.container}>
      <h2>💬 Global Chat</h2>

      <div style={styles.chatBox}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              ...styles.msg,
              alignSelf: m.me ? "flex-end" : "flex-start",
              background: m.me ? "#3b82f6" : "#e5e7eb",
              color: m.me ? "white" : "black",
            }}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div style={styles.inputBox}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={styles.input}
          placeholder="Type message..."
        />
        <button onClick={send} style={styles.btn}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: 20 },
  chatBox: {
    height: 400,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    padding: 10,
    background: "#f8fafc",
    borderRadius: 10,
  },
  msg: {
    padding: 10,
    borderRadius: 10,
    maxWidth: "60%",
  },
  inputBox: {
    display: "flex",
    marginTop: 10,
    gap: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    border: "1px solid #ccc",
  },
  btn: {
    padding: "10px 15px",
    background: "#0f172a",
    color: "white",
    border: "none",
    borderRadius: 8,
  },
};