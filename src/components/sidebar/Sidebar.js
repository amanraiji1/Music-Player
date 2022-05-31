import React, { useEffect, useState } from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { FaPlay, FaSearch, FaSpotify } from "react-icons/fa";
import { IoLibrary, IoTrendingUp } from "react-icons/io5";
import apiClient from "../../spotify";

export default function Sidebar() {
  const [image, setImage] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/0/09/ELLE_TAIWAN_Seo_yea_ji_2020_%283%29.png"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);

  return (
    <div className="sidebar-container">
      <img src={image} alt="Profile Pic" className="profile-img" />
      <div>
        {/* <SidebarButton title="Search" to="/search" icon={<FaSearch />} /> */}
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Trending"
          to="/trending"
          icon={<IoTrendingUp />}
        />
      </div>

      <SidebarButton title="" to="" icon={<FaSpotify />} />
    </div>
  );
}
