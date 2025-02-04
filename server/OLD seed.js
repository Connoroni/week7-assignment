// Seed file for just the original database for the original assignment that didn't work/wasn't complete, only keeping it to show whoever is marking this

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

// INSERT INTO comments (comment_text, user_id, post_id)
// VALUES ('Lovely photo, my dude!', 1, 1);

// INSERT INTO comments (comment_text, user_id, post_id)
// VALUES ('I like monkeys!', 1, 1);

// INSERT INTO comments (comment_text, user_id, post_id)
// VALUES ('Umm actually, orangutans are apes not monkeys.!', 1, 1);

//! Selecting

//? -- First one is just practice
// SELECT posts.post_title, posts.timestamp, posts.img, comments.comment_text FROM posts
// JOIN comments ON posts.id = comments.post_id;

//? -- Selecting all posts by a user (this should appear on user profile)
// SELECT users.username, posts.post_title, posts.timestamp, posts.img FROM users
// JOIN posts ON users.id = posts.user_id;

//? -- Selecting posts, comments, and username to show on feed
// SELECT users.username, posts.post_title, posts.timestamp, posts.img, comments.comment_text FROM users
// JOIN posts ON users.id = posts.user_id
// JOIN comments ON posts.id = comments.post_id;
