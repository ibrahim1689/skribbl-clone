import "./game.css";
import React from "react";

import Button from "@material-ui/core/Button";

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [
        {
          name: "crude-rusher-123",
          uid: "49r8t9gevhei4t98ugrvo4fij9g",
          points: 350,
        },
        {
          name: "scaled-flayer",
          uid: "kushf98u948t9ic4juffj3d49f",
          points: 600,
        },
        {
          name: "dude simpson",
          uid: "iw4ur9w8ur98wi9384ugervifh",
          points: 130,
        },
        {
          name: "srsly, im kddng",
          uid: "oijwerf8u4vekjsfyioruf93w3",
          points: 400,
        },
        {
          name: "crude-rusher-123",
          uid: "49r8t9gevhei4t98ugrvo4fij9g",
          points: 350,
        },
        {
          name: "scaled-flayer",
          uid: "kushf98u948t9ic4juffj3d49f",
          points: 600,
        },
        {
          name: "dude simpson",
          uid: "iw4ur9w8ur98wi9384ugervifh",
          points: 130,
        },
        {
          name: "srsly, im kddng",
          uid: "oijwerf8u4vekjsfyioruf93w3",
          points: 400,
        },
      ],
      currentWordLength: [0, 1, 2, 3, 4],
    };
  }

  sortArray = () => {
    this.state.players.sort((a, b) => {
      return b.points - a.points;
    });
  };

  render() {
    this.sortArray();

    return (
      <div className="game-container">
        <header className="game-header">
          <h1 className="logo">SKRIBBBLE!</h1>
        </header>
        <div className="round-and-hint-container">
          <div className="round-dets">
            <p>ROUND 2 OF 3</p>
          </div>
          <div className="hint-container">
            {this.state.currentWordLength.map((letter) => (
              <div className="letter-dash"></div>
            ))}
          </div>
        </div>
        <div className="main">
          <div className="main-left">
            <ul className="players-list">
              {this.state.players.map((player, index) => (
                <li id={index} className="player-li">
                  <span className="player-name">{player.name}</span>
                  <span className="player-points">Points: {player.points}</span>
                </li>
              ))}
            </ul>
            <div className="btns-container">
              <button className="btn-votekick">Votekick</button>
              <button className="btn-leave">Leave</button>
            </div>
          </div>
          <div className="main-center">
            <div className="whiteboard"></div>
          </div>
          <div className="main-right">
            <div className="chat-container"></div>
            <div className="input-box"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Game;
