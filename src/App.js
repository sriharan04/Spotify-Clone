import React, { useEffect } from "react";
import "./App.css";
import Login from "../src/components/Login";
import { getTokenFromUrl } from "./components/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
    spotify.getUserPlaylists().then((playlist) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlist,
      });
    });

    spotify.getPlaylist("37i9dQZF1DX0TyiNWW7uUQ").then((reponse) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: reponse,
      });
    });
  }, []);
  console.log(user);
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
