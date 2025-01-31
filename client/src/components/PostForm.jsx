import { useState } from "react";
// import { userList } from "../lib/users";

export default function PostForm() {
  // const [username, setUsername] = useState("");
  // const [postTitle, setPostTitle] = useState("");
  // const [img, setImg] = useState("");
  async function getUsers() {
    const result = await fetch("http://localhost:8080/userquery");
    const userList = await result.json();
    console.log(userList);
    return userList;
  }
  getUsers();
  const [formValues, setFormValues] = useState({
    user_id: "",
    postTitle: "",
    img: "",
  });
  console.log(userList);

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
        <label htmlFor="user_id">Username:</label>
        <select name="user_id" id="user_id">
          {userList.map(function (item) {
            return (
              <option key={item.id} value={item.id}>
                {item.username}
              </option>
            );
          })}
        </select>
        {/* <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter a username"
          onChange={handleChangeFormValues}
        /> */}
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
