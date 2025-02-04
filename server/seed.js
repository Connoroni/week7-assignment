// Seed file just being used to display my queries that I'm writing in Supabase

//! Creating the Tables
// CREATE TABLE IF NOT EXISTS posts2 (id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, username VARCHAR(255), timestamp TIMESTAMP, post_title VARCHAR(255), img TEXT);
// CREATE TABLE IF NOT EXISTS comments2 (id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, username VARCHAR(255), timestamp TIMESTAMP, comment_text VARCHAR(255), post_id INT REFERENCES posts2(id))

//! Inserting Dummy Data (ran each query separately)
// INSERT INTO posts2 (username, timestamp, post_title, img)
// VALUES ('John Smith', current_timestamp, 'Lovely Orangutan Photo', 'https://www.agoodplace.co.uk/images/tut-tut2.jpg');
// INSERT INTO posts2 (username, timestamp, post_title, img)
// VALUES ('Connor', current_timestamp, 'Hull Scenery', 'https://www.planetware.com/photos-large/ENG/england-hull-the-deep.jpg');

// INSERT INTO comments2 (username, timestamp, comment_text, post_id)
// VALUES ('Tony', current_timestamp, 'That is such a cute orangutan!', 1);
// INSERT INTO comments2 (username, timestamp, comment_text, post_id)
// VALUES ('Alison', current_timestamp, 'Lovely photo, my dude', 2);
// INSERT INTO comments2 (username, timestamp, comment_text, post_id)
// VALUES ('Monkey_Lover', current_timestamp, 'I like monkeys. :)', 1);
// INSERT INTO comments2 (username, timestamp, comment_text, post_id)
// VALUES ('U. R. Rong', current_timestamp, 'Umm actually, orangutans are apes not monkeys...', 1);

//! Selecting
