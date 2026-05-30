require("dotenv").config();

const express =
  require("express");

const cors =
  require("cors");

const http =
  require("http");

const { Server } =
  require("socket.io");

const connectDB =
  require("./config/db");

const authRoutes =
  require("./routes/authRoutes");

const discussionRoutes =
  require("./routes/discussionRoutes");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use(
  "/api/discussions",
  discussionRoutes
);

const server =
  http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

require("./sockets/socketHandler")(io);

server.listen(
  process.env.PORT,
  () => {
    console.log(
      `Server Running`
    );
  }
);