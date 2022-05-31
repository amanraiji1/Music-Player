import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function Play({ accessToken, trackUri }) {
  if (!accessToken) return null;
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      uris={trackUri ? [trackUri] : []}
    />
  );
}
