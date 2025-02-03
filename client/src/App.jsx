import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./components/Feed";
import PostForm from "./components/PostForm";
import UserForm from "./components/UserForm";
import UserProfile from "./components/UserProfile";
import NotFoundPage from "./components/NotFoundPage";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Feed />} path={"/"} />
        <Route element={<UserForm />} path={"/newuser"} />
        <Route element={<PostForm />} path={"/post"} />
        <Route element={<UserProfile />} path={"/users/:username"} />
        <Route element={<NotFoundPage />} path={"*"} />
      </Routes>
    </>
  );
}
