import React from "react";
import "./trackSearchResults.css";

export default function TrackSearchResults({ track }) {
  function handlePlay() {}
  return (
    <div className="search-box flex">
      <div className="search-tile flex" onClick={handlePlay}>
        <img src={track.albumUrl} alt="tile" />
        <h4>{track.title}</h4>
        <p>{track.artist}</p>
        <button className="tile-btn">+</button>
      </div>
    </div>
  );
}
