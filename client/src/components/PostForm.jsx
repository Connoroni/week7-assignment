import { useState } from "react";

export default function PostForm() {
  // const [username, setUsername] = useState("");
  // const [postTitle, setPostTitle] = useState("");
  // const [img, setImg] = useState("");
  const [formValues, setFormValues] = useState({
    username: "",
    postTitle: "",
    img: "",
    user_id: "",
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
    // fetch to send just username
    // fetch to select user_id that matches submitted username
    // add user_id to formValues object
    fetch("http://localhost:8080/newpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formValues }),
    });
  }

  return (
    <>
      <h2>Create your post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter a username"
          onChange={handleChangeFormValues}
        />
        <label htmlFor="postTitle">Post title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="Enter a title for your post"
          onChange={handleChangeFormValues}
          value={formValues.postTitle}
        />
        <label htmlFor="img">Image link:</label>
        <input
          type="text"
          id="img"
          name="img"
          placeholder="Enter the link to your image"
          onChange={handleChangeFormValues}
          value={formValues.img}
        />
        <button type="submit">Create post</button>
      </form>
    </>
  );
}
