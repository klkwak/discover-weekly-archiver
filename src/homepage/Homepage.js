import React from "react";
import "./Homepage.css";
import { ReactComponent as MusicIcon } from "../assets/file-earmark-music.svg";

function Homepage() {
  return (
    <main className="container-fluid d-flex flex-column justify-content-center">
      <div className="container-fluid d-flex flex-column align-items-center">
        <div className="floating p-4">
          <MusicIcon />
        </div>
        <h1 className="p-2">
          Keep missing out on your Discover Weekly playlists?
        </h1>
        <div className="p-2 text-center">
          <p>
            Log in with Spotify to make sure you never miss new recommended
            songs again.
          </p>
          <p>
            This app will make a dedicated playlist on your account for saving
            songs as soon as your Discover Weekly updates each week.
          </p>
          <p>
            <em>Heads up! We are not affiliated with Spotify.</em>
          </p>
        </div>
        <button type="button" className="spotify-button">
          Log In with Spotify
        </button>
      </div>
    </main>
  );
}

export default Homepage;
