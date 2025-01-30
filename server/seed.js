// Seed file just being used to display my queries that I'm writing in Supabase

//! Creating the Tables
// CREATE TABLE IF NOT EXISTS users (
//     id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//     username VARCHAR(255)
//   );

//   CREATE TABLE IF NOT EXISTS posts (
//     id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//     post_title VARCHAR(255),
//     timestamp TIMESTAMP,
//     img TEXT,
//     user_id INT REFERENCES users(id)
//   );

//   CREATE TABLE IF NOT EXISTS comments (
//     id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//     comment_text VARCHAR(255),
//     user_id INT REFERENCES users(id),
//     post_id INT REFERENCES posts(id)
//   );

//! Inserting Dummy Data (ran each query separately)
// INSERT INTO users (username)
// VALUES ('John Smith');

// INSERT INTO posts (post_title, timestamp, img, user_id)
// VALUES ('Lovely Orangutan Photo', current_timestamp, 'https://www.agoodplace.co.uk/images/tut-tut2.jpg', 1);

// INSERT INTO comments (comment_text, user_id, post_id)
// VALUES ('That is such a cute orangutan!', 1, 1);

//! Selecting
