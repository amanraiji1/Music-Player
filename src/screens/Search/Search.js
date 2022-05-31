import React, { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import TrackSearchResults from "./TrackSearchResults";
import "./search.css";
const spotifyApi = new SpotifyWebApi({
  clientId: "5723a0d88f2343a28f5d0264c5e2c16a",
});
const code = window.localStorage.getItem("token");

export default function Search() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    if (!code) return;
    spotifyApi.setAccessToken(code);
  }, [code]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!code) return;

    let cancel = false;

    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks.items.slice(0, 7).map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });

    return () => (cancel = true);
  }, [search, code]);

  return (
    <div className="screen-container">
      <input
        className="search-bar"
        type="search"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        autoFocus
      ></input>

      <div>
        {searchResults.map((track) => (
          <TrackSearchResults track={track} key={track.uri} />
        ))}
      </div>
    </div>
  );
}
