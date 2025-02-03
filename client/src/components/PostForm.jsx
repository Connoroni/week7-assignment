import { useState, useEffect } from "react";
// import { userList } from "../lib/users";

export default function PostForm() {
  // const [username, setUsername] = useState("");
  // const [postTitle, setPostTitle] = useState("");
  // const [img, setImg] = useState("");
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const result = await fetch(
        "https://dashboard.render.com/web/srv-cufvmp23esus73e5hpq0/userquery"
      );
      const jsonResult = await result.json();
      setUserList(jsonResult);
      // console.log(userList);
    }
    getUsers();
  }, []);
  const [formValues, setFormValues] = useState({
    user_id: "",
    postTitle: "",
    img: "",
  });
  // console.log(userList);

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
    fetch("https://dashboard.render.com/web/srv-cufvmp23esus73e5hpq0/newpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formValues }),
    });
    setFormValues({
      user_id: "",
      postTitle: "",
      img: "",
    });
  }

  return (
    <>
      <h2>Create your post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user_id">Username:</label>
        <select
          name="user_id"
          id="user_id"
          value={formValues.user_id}
          onChange={handleChangeFormValues}
        >
          {userList.map(function (item) {
            return (
              <option
                value={item.id}
                key={item.username}
                onChange={handleChangeFormValues}
              >
                {item.username}
              </option>
            );
          })}
          {/* {async () => {
            await Promise.all(
              userList.map(function (item) {
                return (
                  <option value={item.id} key={item.username}>
                    {item.username}
                  </option>
                );
              })
            );
          }} */}
        </select>
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
