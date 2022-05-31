import React from "react";
import "./widgetCard.css";
import WidgetEntry from "./WidgetEntry";
import { IconContext } from "react-icons";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function WidgetCard({ title, similar, featured, newRelease }) {
  const navigate = useNavigate();

  const trending = () => {
    navigate("/trending");
  };

  return (
    <div className="widgetcard-body">
      <p className="widget-title">{title}</p>
      {similar
        ? similar.map((artist) => (
            <WidgetEntry
              title={artist?.name}
              subtitle={artist?.followers?.total + " Followers"}
              image={artist?.images[2]?.url}
            />
          ))
        : featured
        ? featured.map((playlist) => (
            <WidgetEntry
              title={playlist?.name}
              subtitle={playlist?.tracks?.total + " Songs"}
              image={playlist?.images[0]?.url}
            />
          ))
        : newRelease
        ? newRelease.map((album) => (
            <WidgetEntry
              title={album?.name}
              subtitle={album?.artists[0]?.name}
              image={album?.images[2]?.url}
            />
          ))
        : null}
      <div className="widget-fade">
        <div className="fade-button" onClick={trending}>
          <IconContext.Provider value={{ size: "24px", color: "#c4d0e3" }}>
            <FiChevronRight />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
