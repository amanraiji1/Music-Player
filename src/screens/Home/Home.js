import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../Library/Library";
import Player from "../Player/Player";
import Trending from "../Trending/Trending";
import "./homeCSS.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Login from "../auth/login";
import { setClientToken } from "../../spotify";
import Search from "../Search/Search";

export default function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return !token ? ( //if token not present then goto login else access app
    <Login />
  ) : (
    <Router>
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Library />} />
          <Route path="/player" element={<Player />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </div>
    </Router>
  );
}
