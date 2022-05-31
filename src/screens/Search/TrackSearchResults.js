import React from "react";
import "./trackSearchResults.css";

export default function TrackSearchResults({ track }) {
  const url = "https://open.spotify.com/track/" + track.id;
  return (
    <a className="search-box flex" href={url} target="_blank">
      <div className="search-tile flex">
        <img src={track.albumUrl} alt="tile" />
        <h4>{track.title}</h4>
        <p>{track.artist}</p>
      </div>
    </a>
  );
}
