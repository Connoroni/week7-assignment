import { useState } from "react";

export default function CommentForm() {
  const [formValues, setFormValues] = useState({
    commentText: "",
  });

  function handleChangeFormValues(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formValues);

    fetch("http://localhost:8080/newpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formValues }),
    });
    setFormValues({
      commentText: "",
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="commentText">Comment:</label>
        <textarea
          type="text"
          name="commentText"
          id="commentText"
          placeholder="Comment"
          onChange={handleChangeFormValues}
          value={formValues.commentText}
        />
      </form>
    </>
  );
}
