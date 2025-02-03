import { useState } from "react";

export default function UserForm() {
  const [username, setUsername] = useState("");
  function handleChangeUsername(event) {
    setUsername(event.target.value);
  }
  function handleSubmitUsername(event) {
    event.preventDefault();
    let formData = { username: username };
    fetch("https://dashboard.render.com/web/srv-cufvmp23esus73e5hpq0/newuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });
    console.log("Submitted data: ", formData);
    setUsername("");
  }

  return (
    <>
      <form onSubmit={handleSubmitUsername}>
        <label htmlFor="username">New username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="New User"
          onChange={handleChangeUsername}
          value={username}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
