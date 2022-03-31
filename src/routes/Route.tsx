import { Contact } from "pages/Contact";
import { Home } from "pages/Home";
import { Login } from "pages/Login";
import { NotFound } from "pages/NotFound";
import { Post } from "pages/Post";
import { Profile } from "pages/Profile";
import { Search } from "pages/Search";
import { Routes, Route as RoutePath } from "react-router-dom";

export function Route() {
  return (
    <Routes>
      <RoutePath path="/" element={<Home />} />
      <RoutePath path="/about" element={<Login />} />
      <RoutePath path="/contact" element={<Contact />} />
      <RoutePath path="/post/:id" element={<Post />} />
      <RoutePath path="/profile/:name" element={<Profile />} />
      <RoutePath path="/search" element={<Search />} />

      <RoutePath path="*" element={<NotFound />} />
    </Routes>
  )
}