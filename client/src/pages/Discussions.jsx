export default function Discussions() {
  const posts = [
    { title: "How to learn React fast?", votes: 120 },
    { title: "Best MERN project ideas", votes: 95 },
    { title: "Socket.io explained simply", votes: 80 },
  ];

  return (
    <div style={styles.container}>
      <h2>🔥 Discussions</h2>

      {posts.map((p, i) => (
        <div key={i} style={styles.card}>
          <div>
            <b>{p.title}</b>
          </div>
          <div>⬆️ {p.votes}</div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: { padding: 20 },
  card: {
    padding: 15,
    marginTop: 10,
    background: "#f1f5f9",
    borderRadius: 10,
    display: "flex",
    justifyContent: "space-between",
  },
};