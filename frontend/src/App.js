import "./App.css";

import NewUserForm from "./components/NewUserForm";
import Game from "./components/Game/Game";

function App() {
  return (
    <div className="App">
      {/* <header className="landing-header">
        <h1>SKRIBBBLE!</h1>
      </header>
      <NewUserForm /> */}

      <Game />
    </div>
  );
}

export default App;
