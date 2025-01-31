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

app.post("/newuser", (req, res) => {
  const userData = req.body;
  console.log("Request body: ", userData);
  const query = db.query(
    `INSERT INTO INSERT INTO users (username) VALUES ($1)`,
    [userData.username]
  );
});

// app.post("/newpost", async (req, res) => {
//   const data = req.body;
//   console.log("Request body:", data);
//   const query = await db.query(
//     `INSERT INTO posts (post_title, timestamp, img, user_id) VALUES ($1, current_timestamp, $2, $3)`,
//     [data.username, data.postTitle, data.img]
//   );
// });

// route to select all data from users table

app.post("/feed", async (req, res) => {
  const query = await db.query(
    `SELECT users.username, posts.post_title, posts.timestamp, posts.img, comments.comment_text FROM users
    JOIN posts ON users.id = posts.user_id
    JOIN comments ON posts.id = comments.post_id;`
  );
  await res.json(query.rows);
  console.log(query.rows);
});
