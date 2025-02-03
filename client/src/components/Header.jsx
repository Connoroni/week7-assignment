import { Link } from "react-router-dom";
import createUser from "../assets/create_user.png";

export default function Header() {
  return (
    <>
      <h1>
        <Link to={"/"}>WEBSITE TITLE TBD</Link>
      </h1>
      <Link to="/newuser">
        <img
          src={createUser}
          alt='A symbol showing an outline of a person, representing "Create User"'
        />
      </Link>
    </>
  );
}
