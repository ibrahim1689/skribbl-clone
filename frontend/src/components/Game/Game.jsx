import "./game.css";

const Game = () => {
  return (
    <div className="game-container">
      <header className="game-header">
        <h1 className="logo">SKRIBBBLE!</h1>
      </header>
      <div className="round-and-hint-container">
        <div className="round-dets">Round 2 of 3</div>
        <div className="hint-container"></div>
      </div>
      <div className="main">
        <div className="main-left">
          <div className="players-info-section"></div>
          <div className="btns-container"></div>
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
};

export default Game;
