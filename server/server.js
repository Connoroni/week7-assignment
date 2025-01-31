import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

app.get("/", (req, res) => {
  res.json("Test on root");
});

app.post("/test-post", async (req, res) => {
  const query = await db.query(
    `SELECT users.username, posts.post_title, posts.timestamp, posts.img, comments.comment_text FROM users
    JOIN posts ON users.id = posts.user_id
    JOIN comments ON posts.id = comments.post_id;`
  );
  await res.json(query.rows);
  console.log(query.rows);
});
