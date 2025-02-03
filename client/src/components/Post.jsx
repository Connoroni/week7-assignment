import { CommentForm } from "./CommentForm";

export default function Post() {
  // fetch an array of comments from the database with a SELECT query where post_id =
  return (
    <>
      <h2>Placeholder_Post_Title</h2>
      <img
        src="https://archive.org/download/placeholder-image/placeholder-image.jpg"
        alt="Standard placeholder image with a grey symbol representing an image on a pale grey background"
      />
      <CommentForm />
      {/* map through comments array to generate Comment component for each, pass props to each one to give it the text and username from the database */}
    </>
  );
}
