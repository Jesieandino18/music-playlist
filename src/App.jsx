import React, { useState } from "react";
import "./App.css";

function App() {
  const songs = [
    "APT.",
    "Die With A Smile",
    "Birds of a Feather",
    "Espresso",
    "Beautiful Things",
    "Perfect",
    "Until I Found You"
  ];

  const [song, setSong] = useState(0);
  const [play, setPlay] = useState(false);

  return (
    <div className="screen">
      <div className="player">

        <header>
          <span>◀</span>
          <small>ALBUM TRACKS</small>
          <span>☰</span>
        </header>

        <section className="albumInfo">
          <h2>912 Album</h2>
          <p>My Favorite Songs</p>

          <div className="album">
            <div className="cover">🎵</div>
            <div className="cd">●</div>
          </div>
        </section>

        <div className="tracks">
          {songs.map((item, i) => (
            <div
              className={song === i ? "track active" : "track"}
              onClick={() => setSong(i)}
              key={item}
            >
              <div>
                <b>{item}</b>
                <small>Music</small>
              </div>

              <span>☆ ⊘ ☷</span>
            </div>
          ))}
        </div>

        <div className="progress">
          <div></div>
        </div>

        <div className="controls">
          <button>◀◀</button>

          <button
            className="play"
            onClick={() => setPlay(!play)}
          >
            {play ? "❚❚" : "▶"}
          </button>

          <button
            onClick={() =>
              setSong((song + 1) % songs.length)
            }
          >
            ▶▶
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
