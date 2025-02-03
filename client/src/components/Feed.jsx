import { Link } from "react-router-dom";
import createPost from "../assets/create_post.png";

export default function Feed() {
  // fetch all posts from database, SELECT query grabbing all posts with no conditionals
  return (
    <>
      <h2>this is the feed</h2>
      <Link to="/post">
        <img
          src={createPost}
          alt='A symbol showing a pen and paper, meaning "Create Post"'
        />
      </Link>
      {/* map through array of posts from database, creating a Post component for each one, pass each one props for the username, title, img, and id (comments probably don't need props here because they're getting fetched within the post component, since it needs a second SELECT query using post_id to select only matching comments) */}
    </>
  );
}
