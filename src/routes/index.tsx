import { About } from "pages/About";
import { Contact } from "pages/Contact";
import { Home } from "pages/Home";
import { Login } from "pages/Login";
import { NotFound } from "pages/NotFound";
import { Post } from "pages/Post";
import { Profile } from "pages/Profile";
import { Search } from "pages/Search";
import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
// import { Route } from "./Route";

export function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search/:word_search" element={<Search />} />

        <Route path="*" element={<NotFound />} />
      </Router>
    </BrowserRouter>
  )
}