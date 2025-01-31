import { useParams } from "react-router-dom";

export default function UserProfile() {
  let { username } = useParams();
  return (
    <>
      <h2>This is the profile of {username}</h2>
    </>
  );
}
